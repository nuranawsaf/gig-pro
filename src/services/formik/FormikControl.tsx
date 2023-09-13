import React from 'react';

import { Input, Textarea } from './index';

interface FormikControlProps extends React.HTMLAttributes<HTMLInputElement> {
  control: 'input' | 'textarea';

  name: string;
  icon?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  options?: any;
  info?: any;
  label?: string;
  labelJsx?: React.ReactNode;
  disabled?: boolean;
  isLabelModify?: boolean;
  index?: number;
  service?: any;
}

const FormikControl = ({ control, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;

    case 'textarea':
      return <Textarea {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
