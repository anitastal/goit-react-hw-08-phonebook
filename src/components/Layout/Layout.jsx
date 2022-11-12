import { Header } from 'components/Header/Header';
import css from './Lauout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={css.layout}>{children}</main>
    </>
  );
};
