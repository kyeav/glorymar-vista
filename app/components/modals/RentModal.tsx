"use client";

import { useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import useRentModal from "@/app/hooks/useRentModal";

import GenericModal from "./GenericModal";
import Heading from "../Heading";
import CountrySelect from "../inputs/CountrySelect";
import Counter from "../inputs/Counter";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";

enum STEPS {
  LOCATION = 0,
  INFO = 1,
  IMAGES = 2,
  DESCRIPTION = 3,
  PRICE = 4,
}

const RentModal = () => {
  const rentModal = useRentModal();
  const router = useRouter();

  const [step, setStep] = useState(STEPS.LOCATION);
  const [isloading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      imageSrc: "",
      roomCount: 1,
      bathroomCount: 1,
      guestCount: 1,
      location: null,
      price: 1,
    },
  });

  const location = watch("location");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const guestCount = watch("guestCount");
  const imageSrc = watch("imageSrc");

  const Map = useMemo(
    () => dynamic(() => import("../Map"), { ssr: false }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Listing created!");
        router.refresh();
        reset();
        setStep(STEPS.LOCATION);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined;
    }
    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where is your place located?"
        subtitle="Help guests find you!"
      />
      <CountrySelect
        value={location}
        onChange={(value) => setCustomValue("location", value)}
      />
      <Map center={location?.latlng} />
    </div>
  );

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Share some basics about your place"
          subtitle="What amenities do you have?"
        />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have?"
          value={roomCount}
          onChange={(value) => setCustomValue("roomCount", value)}
        />
        <hr />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
          value={bathroomCount}
          onChange={(value) => setCustomValue("bathroomCount", value)}
        />
        <hr />
        <Counter
          title="Guests"
          subtitle="How many guests do you allow?"
          value={guestCount}
          onChange={(value) => setCustomValue("guestCount", value)}
        />
      </div>
    );
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue("imageSrc", value)}
        />
      </div>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your place?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="title"
          label="Title"
          register={register}
          errors={errors}
          disabled={isloading}
          required
        />
        <hr />
        <Input
          id="description"
          label="Description"
          register={register}
          errors={errors}
          disabled={isloading}
          required
        />
      </div>
    );
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="Price"
          register={register}
          errors={errors}
          disabled={isloading}
          required
          formatPrice
          type="number"
        />
      </div>
    );
  }

  return (
    <GenericModal
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      title="Rent your home!"
      body={bodyContent}
    />
  );
};

export default RentModal;
