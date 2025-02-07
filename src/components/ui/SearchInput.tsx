import { FC, FormEvent, useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { useSearchStore } from "@/store/search";

interface SearchInputProps {
  onSearch?: (address: string) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const setAddress = useSearchStore.use.setAddress();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setAddress(inputValue.trim());
    onSearch?.(inputValue.trim());
  };

  return (
    <form className="w-full max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          className="flex-1"
          label="Owner Bitcoin Address"
          labelPlacement="outside"
          placeholder="Enter Bitcoin wallet address"
          size="lg"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          className="w-full sm:w-auto"
          disabled={!inputValue.trim()}
          size="lg"
          type="submit"
        >
          Look up
        </Button>
      </div>
    </form>
  );
};
