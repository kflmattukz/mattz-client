import Head from "next/head";
import { FC } from "react";

interface HeaderProps {
  title: string;
  content: string;
}

export const Header: FC<HeaderProps> = ({ title, content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
