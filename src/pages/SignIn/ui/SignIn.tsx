import { useTranslation } from 'react-i18next';
import { EntryLayout } from 'shared/ui/EntryLayout';

interface SignInProps {
  className?: string;
}

const SignIn = ({ className }: SignInProps) => {
  const { t } = useTranslation();

  return <EntryLayout>{t('Sign in')}</EntryLayout>;
};

// eslint-disable-next-line import/no-default-export
export default SignIn;
