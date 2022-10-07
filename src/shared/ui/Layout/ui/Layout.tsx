import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import css from './Layout.module.scss';

interface LayoutProps {
  className?: string;
}

export const Layout = ({ className }: LayoutProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(css.layout, {}, [className])} data-testid="Layout">
      {t('Layout')}
    </div>
  );
};