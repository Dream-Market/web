import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import css from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
}

export const MainLayout = ({ className }: MainLayoutProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(css.mainLayout, {}, [className])}
      data-testid="MainLayout"
    >
      {t('MainLayout')}
    </div>
  );
};
