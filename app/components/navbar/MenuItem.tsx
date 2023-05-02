"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className="py-3 hover:text-[#978667] transition font-semibold cursor-pointer uppercase"
    >
      {label}
    </div>
  );
};

export default MenuItem;
