import axios from "axios";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "react-query";
import { Layout } from "widgets/layout";

export const getStaticProps = async (context) => {
  const id = context.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["games", id], () =>
    axios
      .get(`${process.env.BASE_URL}/games?token&key=${process.env.API_KEY}`)
      .then(({ data }) => data)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

const GamePage = () => {
  const { query } = useRouter();

  return <Layout />;
};

export default GamePage;
