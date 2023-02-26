import { PhotosIndex } from "./PhotosIndex";
export function Content() {
  const photos = [
    { id: 1, name: "Fist", url: "https://via.placeholder.com/150", width: 150, height: 150 },
    { id: 2, name: "second", url: "https://via.placeholder.com/300", width: 300, height: 300 },
  ];
  return (
    <div>
      <PhotosIndex photos={photos} />
    </div>
  );
}
