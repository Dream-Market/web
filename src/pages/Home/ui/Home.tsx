import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import css from './Home.module.scss';

interface HomeProps {
  className?: string;
}

const Home = ({ className }: HomeProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(css.home, {}, [className])} data-testid="Home">
      {t('Home')}
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;