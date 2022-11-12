import { Container, Text, Title } from "@mantine/core";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mantine Next/Font Example</title>
      </Head>
      <Container size="sm" p="lg">
        <Title order={1} my="lg">
          This is an
        </Title>
        <Title order={2} my="lg">
          example of how
        </Title>
        <Title order={3} my="lg">
          to use the @next/font
        </Title>
        <Title order={4} my="lg">
          with mantine theme
        </Title>
        <Text weight={700} my="lg">
          The Text component is using the global font
        </Text>
        <Text weight={600} my="lg">
          and the Title is using the heading font
        </Text>
        <Text weight={500} my="lg">
          both loaded in the mantine theme
        </Text>
        <Text weight={400} my="lg">
          The texts you are seeing, are testing every font weight
        </Text>
        <Text weight={300} my="lg">
          And everything is optimized through @next/font
        </Text>
      </Container>
    </>
  );
}
