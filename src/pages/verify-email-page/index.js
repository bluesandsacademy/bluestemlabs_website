import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VerifyEmailPage = () => {
  const { token } = useParams();
  const [verificationMessage, setVerificationMessage] = useState(
    "Verifying your email..."
  );
  const [isVerified, setIsVerified] = useState(null);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `https://email-delivery-api.onrender.com/verify/${token}`
        );
        if (response.status === 200) {
          setIsVerified(true);
          setVerificationMessage(
            "Your email has been successfully verified! A representative will reach out to you soon"
          );
        } else {
          setIsVerified(false);
          setVerificationMessage("Invalid or expired verification link.");
        }
      } catch (error) {
        setIsVerified(false);
        setVerificationMessage(
          "Something went wrong while trying to verify your email. Please try again later."
        );
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        {isVerified === null ? (
          <>
            <img
              src="/saturn-assets/logos/logo.webp"
              alt
              width="auto"
              height="10px"
              className="w-auto h-[30px] mx-auto"
            />
            <p className="text-gray-600 text-xl">{verificationMessage}</p>
          </>
        ) : (
          <>
            <img
              src="/saturn-assets/logos/logo.webp"
              alt
              width="auto"
              height="10px"
              className="w-auto h-[30px] mx-auto"
            />
            <p
              className={`text-xl ${
                isVerified ? "text-green-600" : "text-red-600"
              }`}
            >
              {verificationMessage}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
