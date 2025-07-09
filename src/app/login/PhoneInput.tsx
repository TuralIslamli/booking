import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './index.module.scss';
import { normalizePhone } from '../utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../api';

interface IProps {
  setStep: Dispatch<SetStateAction<'phone' | 'otp'>>;
}

function PhoneInput({ setStep }: IProps) {
  const [phone, setPhone] = useState('');

  const { mutate: loginMutate } = useMutation(
    {
      mutationFn: async () => api.postLogin({ phone: normalizePhone(phone) }),
      onSuccess: () => {
        setStep('otp');
      },
      onError: (error: any) => {console.log('Error during login:', error)}
      
    }
  );

  const handleSendOtp = async () => {
    loginMutate();
  };

  return (
    <div className={styles.phoneInput}>
      <label htmlFor="phone" className={styles.label}>
        Mobil nömrə
      </label>
      <InputMask
        id="client_phone"
        mask="+999 99 999-99-99"
        placeholder="+994 99 999-99-99"
        value={phone}
        onChange={(e) => setPhone(e.target.value as string)}
        className={styles.input}
      />
      <Button
        label="Kod göndər"
        onClick={handleSendOtp}
        className={styles.button}
        disabled={normalizePhone(phone).length !== 13}
      />
    </div>
  );
}

export default PhoneInput;
