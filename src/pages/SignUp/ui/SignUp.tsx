import { useTranslation } from 'react-i18next';
import { EntryLayout } from 'shared/ui/EntryLayout';

interface SignUpProps {
  className?: string;
}

const SignUp = ({ className }: SignUpProps) => {
  const { t } = useTranslation();

  return <EntryLayout>{t('Sign up')}</EntryLayout>;
};

// eslint-disable-next-line import/no-default-export
export default SignUp;
