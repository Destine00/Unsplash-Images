import { useQuery } from "@tanstack/react-query";
import { useAppCtx } from "./Context";
import axios from "axios";

const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { search } = useAppCtx();

  const resp = useQuery({
    queryKey: ["gallery", search],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${search}`);
      return result.data;
    },
  });

  if (resp.isLoading) {
    return (
      <section className="image-container">
        <div className="loading"></div>;
      </section>
    );
  }

  if (resp.isError) {
    return (
      <section className="image-container">
        <h3>Something went wrong</h3>;
      </section>
    );
  }

  const data = resp.data.results;

  if (data.length === 0) {
    return (
      <section className="image-container">
        <h3>No results found...</h3>;
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.map((image) => {
        // const {} = image
        return (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
