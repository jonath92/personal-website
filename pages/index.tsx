import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from "../components/sharedstyles";
import Cards from "../components/cards";
import { Cover } from "../components/Cover";
import { DefaultPageLayout } from "../layouts/DefaultPageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Heard</title>
        <meta
          name="description"
          content="Personal Site - Jonathan Heard - Software Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultPageLayout>
        <Cover showAnimation onAnimationFinished={() => {}} />
      </DefaultPageLayout>

      {/* 
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main> */}
    </>
  );
}
