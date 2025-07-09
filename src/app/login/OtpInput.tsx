import { Button } from 'primereact/button';
import { InputOtp } from 'primereact/inputotp';
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './index.module.scss';
import { normalizePhone } from '../utils';

interface IProps {
  setStep: Dispatch<SetStateAction<'phone' | 'otp'>>;
}

function OtpInput({ setStep }: IProps) {
  const [otp, setOtp] = useState('');

  const handleVerifyOtp = async () => {
    console.log('OTP təsdiqlənir:', otp);
    window.location.href = '/bookings';
  };

  return (
    <div className={styles.otpInput}>
      <InputOtp
        // value={token}
        // onChange={(e) => setTokens(e.value)}
        length={6}
        // inputTemplate={customInput}
        style={{ gap: 10 }}
      />
      <div>
        <Button label="Yenidən göndər" link></Button>
        <Button label="Təsdiqlə"></Button>
      </div>
    </div>
  );
}

export default OtpInput;
