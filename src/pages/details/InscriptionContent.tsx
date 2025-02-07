import { FC, useState } from "react";

interface InscriptionContentProps {
  content_type?: string;
  contentUrl: string;
}

export const InscriptionContent: FC<InscriptionContentProps> = ({
  content_type,
  contentUrl,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Handle image content types
  if (content_type?.startsWith("image/")) {
    return (
      <div className="flex justify-center bg-[#18181B] rounded-lg p-4">
        {isLoading && (
          <div className="text-center py-4 text-gray-400">Loading...</div>
        )}
        {error && <div className="text-center py-4 text-red-500">{error}</div>}
        <img
          alt="Inscription content"
          className={`max-w-full h-auto rounded-lg ${isLoading ? "hidden" : ""}`}
          height={300}
          src={contentUrl}
          width={300}
          onError={() => {
            setIsLoading(false);
            setError("Failed to load image");
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    );
  }

  return (
    <div className="text-center py-4 bg-[#18181B] rounded-lg">
      <div className="flex w-full justify-center">
        <iframe className="bg-white" src={contentUrl} title="Preview" />
      </div>
      <a
        className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
        href={contentUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        View content directly
      </a>
    </div>
  );
};
