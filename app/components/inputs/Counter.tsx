"use client";

import { IconButton } from "@chakra-ui/react";
import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  const onReduce = useCallback(() => {
    if (value === 1) return;

    onChange(value - 1);
  }, [value, onChange]);

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600">{subtitle}</div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <IconButton
          onClick={onReduce}
          _hover={{ opacity: 0.8 }}
          _focus={{ bg: "none" }}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 text-neutral-600 transition"
          aria-label="Reduce count"
          icon={<AiOutlineMinus />}
        />
        <div className="font-light text-xl text-neutral-600">{value}</div>
        <IconButton
          onClick={onAdd}
          _hover={{ opacity: 0.8 }}
          _focus={{ bg: "none" }}
          className="w-10 h-10 rounded-full border-[1px] border-neutral-400 text-neutral-600 transition"
          aria-label="Add count"
          icon={<AiOutlinePlus />}
        />
      </div>
    </div>
  );
};

export default Counter;
