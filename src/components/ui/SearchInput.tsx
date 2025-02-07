import { FC, FormEvent, useState, useId } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

interface SearchInputProps {
  buttonText?: string;
  defaultValue?: string;
  onSearch?: (address: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  buttonText = "Look up",
  defaultValue = "",
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const inputId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    onSearch?.(inputValue.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input
          className="w-full bg-[#18181B] text-white"
          id={inputId}
          placeholder="Enter Bitcoin wallet address"
          size="lg"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          className="w-full bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-colors"
          disabled={!inputValue.trim()}
          size="lg"
          type="submit"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};
