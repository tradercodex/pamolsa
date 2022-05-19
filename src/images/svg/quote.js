import React, { Fragment } from 'react';

const Quote = ({ number }) => {

    return (
        <Fragment>
            {number === 0 ? <p style={{
                position: "absolute",
                right: "11px",
                top: "2px",
                fontSize: "8px",
                fontFamily: "Amble-light",
                color: "#fff"
            }}>0</p> :
                <p style={{
                    position: "absolute",
                    right: "11px",
                    top: "2px",
                    fontSize: "8px",
                    fontFamily: "Amble-light",
                    color: "#fff"
                }}>{number}</p>
            }
            <svg width="49" height="50" viewBox="0 0 49 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.488281 43.3369C0.488281 42.7778 0.571431 42.2701 0.737729 41.8136C0.904028 41.3572 1.14109 40.968 1.44892 40.646C1.75675 40.3205 2.13004 40.071 2.56878 39.8977C3.01107 39.7208 3.50643 39.6323 4.05486 39.6323C4.41576 39.6323 4.72005 39.6606 4.96773 39.7172C5.21895 39.7738 5.43478 39.8393 5.61523 39.9136L5.34456 40.9857C5.17826 40.9255 4.99073 40.8778 4.78197 40.8424C4.57675 40.807 4.35738 40.7893 4.12385 40.7893C3.81602 40.7893 3.53827 40.8388 3.29059 40.9379C3.04291 41.037 2.83239 41.1909 2.65901 41.3997C2.48563 41.6049 2.35118 41.8685 2.25565 42.1905C2.16365 42.5089 2.11765 42.891 2.11765 43.3369C2.11765 43.7827 2.16542 44.1684 2.26095 44.4939C2.35649 44.8159 2.49094 45.0812 2.66432 45.29C2.84123 45.4987 3.05353 45.6544 3.30121 45.757C3.55242 45.8561 3.83018 45.9056 4.13447 45.9056C4.42107 45.9056 4.6829 45.8773 4.91996 45.8207C5.15703 45.7606 5.36579 45.6951 5.54624 45.6244L5.79569 46.7018C5.59047 46.8044 5.33925 46.8893 5.04203 46.9565C4.74482 47.0273 4.38215 47.0627 3.95402 47.0627C3.42328 47.0627 2.94384 46.9742 2.51571 46.7973C2.09112 46.6168 1.72844 46.3639 1.42769 46.0383C1.12694 45.7128 0.895182 45.3218 0.732422 44.8654C0.569661 44.4054 0.488281 43.8959 0.488281 43.3369ZM6.4485 44.3028C6.4485 43.8747 6.51572 43.4908 6.65018 43.1511C6.78463 42.8114 6.97393 42.5231 7.21807 42.286C7.46221 42.0454 7.75412 41.8614 8.09379 41.734C8.437 41.6066 8.81383 41.543 9.22427 41.543C9.63825 41.543 10.0151 41.6066 10.3547 41.734C10.6944 41.8614 10.9863 42.0454 11.2305 42.286C11.4746 42.5231 11.6639 42.8114 11.7984 43.1511C11.9328 43.4908 12 43.8747 12 44.3028C12 44.7345 11.9328 45.1202 11.7984 45.4598C11.6639 45.7995 11.4746 46.0896 11.2305 46.3302C10.9863 46.5673 10.6944 46.7495 10.3547 46.8769C10.0151 47.0007 9.63825 47.0627 9.22427 47.0627C8.81383 47.0627 8.437 47.0007 8.09379 46.8769C7.75412 46.7495 7.46221 46.5673 7.21807 46.3302C6.97393 46.0896 6.78463 45.7995 6.65018 45.4598C6.51572 45.1202 6.4485 44.7345 6.4485 44.3028ZM8.04072 44.3028C8.04072 44.5965 8.06902 44.8459 8.12564 45.0512C8.18579 45.2528 8.26717 45.4174 8.36978 45.5447C8.47593 45.6721 8.60153 45.7641 8.7466 45.8207C8.89167 45.8773 9.05089 45.9056 9.22427 45.9056C9.39764 45.9056 9.55687 45.8773 9.70194 45.8207C9.85054 45.7641 9.97615 45.6721 10.0788 45.5447C10.1849 45.4174 10.2663 45.2528 10.3229 45.0512C10.3831 44.8459 10.4131 44.5965 10.4131 44.3028C10.4131 44.0127 10.3831 43.7668 10.3229 43.5651C10.2663 43.3599 10.1849 43.1936 10.0788 43.0662C9.97615 42.9388 9.85054 42.8468 9.70194 42.7902C9.55687 42.73 9.39764 42.7 9.22427 42.7C9.05089 42.7 8.89167 42.73 8.7466 42.7902C8.60153 42.8468 8.47593 42.9388 8.36978 43.0662C8.26717 43.1936 8.18579 43.3599 8.12564 43.5651C8.06902 43.7668 8.04072 44.0127 8.04072 44.3028ZM12.6635 41.6491H13.433V40.2692L15.02 40.163V41.6491H16.5166V42.6416H15.02V45.0405C15.02 45.3236 15.073 45.5217 15.1792 45.635C15.2853 45.7482 15.4658 45.8048 15.7205 45.8048C15.8762 45.8048 16.0213 45.7942 16.1557 45.773C16.2937 45.7517 16.4123 45.7305 16.5113 45.7093L16.6387 46.8132C16.5609 46.8415 16.4724 46.8681 16.3733 46.8928C16.2743 46.9141 16.1699 46.9335 16.0602 46.9512C15.9505 46.9654 15.8391 46.9777 15.7258 46.9884C15.6126 46.999 15.5029 47.0043 15.3968 47.0043C15.089 47.0043 14.813 46.976 14.5688 46.9194C14.3282 46.8592 14.123 46.7566 13.9532 46.6115C13.7869 46.4629 13.6577 46.263 13.5657 46.0118C13.4773 45.757 13.433 45.4333 13.433 45.0405V42.6416H12.6104L12.6635 41.6491ZM17.7055 41.6491H19.2871V46.9565H17.7055V41.6491ZM17.6843 39.5155H19.303V40.6407H17.6843V39.5155ZM20.5768 41.6491H24.7007V42.4771L22.4185 45.7942H24.9926L24.7697 46.9565H20.545L20.5397 46.0436L22.7688 42.8114H20.5768V41.6491ZM29.0156 43.7508V43.6553C29.0156 43.4819 28.9926 43.3386 28.9466 43.2254C28.9041 43.1122 28.8404 43.022 28.7555 42.9547C28.6706 42.884 28.5627 42.8344 28.4318 42.8061C28.3044 42.7778 28.1558 42.7637 27.9859 42.7637C27.848 42.7637 27.7047 42.7743 27.556 42.7955C27.411 42.8132 27.2694 42.838 27.1315 42.8698C26.9935 42.9017 26.8625 42.9388 26.7387 42.9813C26.6149 43.0202 26.5087 43.0609 26.4203 43.1033L26.1496 42.0153C26.277 41.9481 26.4203 41.8862 26.5795 41.8296C26.7422 41.7729 26.9103 41.7234 27.0837 41.681C27.2606 41.6385 27.4393 41.6049 27.6197 41.5801C27.8037 41.5553 27.9824 41.543 28.1558 41.543C28.5167 41.543 28.8457 41.5748 29.143 41.6385C29.4437 41.7022 29.7002 41.8136 29.9125 41.9729C30.1284 42.1321 30.2964 42.3479 30.4167 42.6204C30.537 42.8928 30.5972 43.2378 30.5972 43.6553V46.9565H29.1748L29.074 46.4098C29.0032 46.47 28.913 46.5372 28.8033 46.6115C28.6936 46.6823 28.568 46.7495 28.4265 46.8132C28.2885 46.8769 28.1346 46.93 27.9647 46.9724C27.7984 47.0184 27.6197 47.0414 27.4287 47.0414C27.1421 47.0414 26.8891 47.0025 26.6697 46.9247C26.4503 46.8433 26.2663 46.7336 26.1177 46.5956C25.9691 46.4576 25.8559 46.2966 25.7781 46.1126C25.7038 45.9251 25.6666 45.7252 25.6666 45.5129C25.6666 45.2688 25.7268 45.0405 25.8471 44.8282C25.9709 44.6124 26.139 44.4249 26.3513 44.2657C26.5671 44.1064 26.8219 43.9808 27.1155 43.8888C27.4092 43.7968 27.7277 43.7508 28.0709 43.7508H29.0156ZM27.9063 45.9587C28.0408 45.9587 28.1664 45.9463 28.2832 45.9216C28.4035 45.8933 28.5114 45.8614 28.6069 45.826C28.706 45.7907 28.7891 45.7553 28.8564 45.7199C28.9271 45.6845 28.9802 45.6562 29.0156 45.635V44.6531H28.1929C28.0054 44.6566 27.8515 44.6867 27.7312 44.7433C27.6109 44.7999 27.5154 44.8672 27.4446 44.945C27.3774 45.0228 27.3314 45.1025 27.3066 45.1838C27.2818 45.2652 27.2694 45.3324 27.2694 45.3855C27.2694 45.5695 27.3296 45.711 27.4499 45.8101C27.5737 45.9092 27.7259 45.9587 27.9063 45.9587ZM35.6021 46.5107C35.503 46.5991 35.4004 46.677 35.2942 46.7442C35.1916 46.8114 35.0766 46.8698 34.9493 46.9194C34.8254 46.9654 34.6874 47.0007 34.5353 47.0255C34.3831 47.0503 34.2098 47.0627 34.0152 47.0627C33.6826 47.0627 33.38 46.9972 33.1076 46.8663C32.8351 46.7318 32.6016 46.5443 32.407 46.3037C32.2159 46.0596 32.0673 45.7677 31.9612 45.428C31.8586 45.0883 31.8073 44.7097 31.8073 44.2922C31.8073 43.8747 31.8586 43.4979 31.9612 43.1617C32.0673 42.822 32.2159 42.5337 32.407 42.2966C32.6016 42.056 32.8351 41.8702 33.1076 41.7393C33.38 41.6084 33.6826 41.543 34.0152 41.543C34.1885 41.543 34.346 41.5536 34.4875 41.5748C34.629 41.596 34.76 41.6279 34.8803 41.6703C35.0006 41.7093 35.112 41.7588 35.2146 41.8189C35.3172 41.8791 35.4163 41.9481 35.5118 42.0259V39.5261H37.0935V46.9565H35.7082L35.6021 46.5107ZM33.4367 44.2922C33.4367 44.5505 33.4561 44.7805 33.495 44.9822C33.5375 45.1803 33.6029 45.3484 33.6914 45.4864C33.7834 45.6244 33.9002 45.7287 34.0417 45.7995C34.1832 45.8703 34.3566 45.9056 34.5618 45.9056C34.7458 45.9056 34.9156 45.8773 35.0713 45.8207C35.2306 45.7606 35.3774 45.6827 35.5118 45.5872V43.0184C35.3774 42.9264 35.2306 42.8504 35.0713 42.7902C34.9156 42.73 34.7458 42.7 34.5618 42.7C34.3566 42.7 34.1832 42.7354 34.0417 42.8061C33.9002 42.8733 33.7834 42.9742 33.6914 43.1086C33.6029 43.2431 33.5375 43.4094 33.495 43.6075C33.4561 43.8057 33.4367 44.0339 33.4367 44.2922ZM38.2717 44.3028C38.2717 43.8747 38.3389 43.4908 38.4734 43.1511C38.6078 42.8114 38.7971 42.5231 39.0413 42.286C39.2854 42.0454 39.5773 41.8614 39.917 41.734C40.2602 41.6066 40.637 41.543 41.0475 41.543C41.4614 41.543 41.8383 41.6066 42.1779 41.734C42.5176 41.8614 42.8095 42.0454 43.0537 42.286C43.2978 42.5231 43.4871 42.8114 43.6216 43.1511C43.756 43.4908 43.8232 43.8747 43.8232 44.3028C43.8232 44.7345 43.756 45.1202 43.6216 45.4598C43.4871 45.7995 43.2978 46.0896 43.0537 46.3302C42.8095 46.5673 42.5176 46.7495 42.1779 46.8769C41.8383 47.0007 41.4614 47.0627 41.0475 47.0627C40.637 47.0627 40.2602 47.0007 39.917 46.8769C39.5773 46.7495 39.2854 46.5673 39.0413 46.3302C38.7971 46.0896 38.6078 45.7995 38.4734 45.4598C38.3389 45.1202 38.2717 44.7345 38.2717 44.3028ZM39.8639 44.3028C39.8639 44.5965 39.8922 44.8459 39.9488 45.0512C40.009 45.2528 40.0904 45.4174 40.193 45.5447C40.2991 45.6721 40.4247 45.7641 40.5698 45.8207C40.7149 45.8773 40.8741 45.9056 41.0475 45.9056C41.2208 45.9056 41.3801 45.8773 41.5251 45.8207C41.6737 45.7641 41.7994 45.6721 41.902 45.5447C42.0081 45.4174 42.0895 45.2528 42.1461 45.0512C42.2063 44.8459 42.2363 44.5965 42.2363 44.3028C42.2363 44.0127 42.2063 43.7668 42.1461 43.5651C42.0895 43.3599 42.0081 43.1936 41.902 43.0662C41.7994 42.9388 41.6737 42.8468 41.5251 42.7902C41.3801 42.73 41.2208 42.7 41.0475 42.7C40.8741 42.7 40.7149 42.73 40.5698 42.7902C40.4247 42.8468 40.2991 42.9388 40.193 43.0662C40.0904 43.1936 40.009 43.3599 39.9488 43.5651C39.8922 43.7668 39.8639 44.0127 39.8639 44.3028ZM44.9962 41.6491H46.3336L46.4876 42.3762C46.6963 42.0719 46.921 41.8579 47.1616 41.734C47.4022 41.6066 47.6587 41.543 47.9312 41.543C48.0019 41.543 48.0762 41.5447 48.1541 41.5483C48.2319 41.5518 48.3062 41.5571 48.377 41.5642L48.2868 42.8486C48.1948 42.8309 48.1028 42.8203 48.0108 42.8167C47.9188 42.8097 47.8144 42.8061 47.6976 42.8061C47.4818 42.8061 47.2819 42.868 47.0979 42.9919C46.9175 43.1122 46.7494 43.2732 46.5937 43.4749V46.9565H44.9962V41.6491Z" fill="#8DB72E" />
                <path d="M33.042 8.05052H30.4852V6.90673C30.4852 6.53667 30.0816 6.36848 29.7115 6.36848H27.7267C27.2557 5.02283 26.0783 4.35 24.7326 4.35C23.4018 4.29997 22.1913 5.116 21.7385 6.36848H19.7873C19.4173 6.36848 19.0472 6.53667 19.0472 6.90673V8.05052H16.4904C14.9753 8.06668 13.7358 9.26192 13.6646 10.7754V30.0519C13.6646 31.5321 15.0102 32.6086 16.4904 32.6086H33.042C34.5222 32.6086 35.8678 31.5321 35.8678 30.0519V10.7755C35.7966 9.26192 34.5571 8.06668 33.042 8.05052ZM20.3928 7.71414H22.2431C22.5661 7.67473 22.8255 7.42901 22.8823 7.1086C23.0816 6.24099 23.8427 5.61819 24.7326 5.59475C25.6143 5.62148 26.364 6.2462 26.5492 7.1086C26.6096 7.44009 26.8861 7.68896 27.2221 7.71414H29.1396V10.4054H20.3928V7.71414ZM34.5222 30.0519C34.5222 30.7921 33.7821 31.263 33.042 31.263H16.4904C15.7503 31.263 15.0102 30.7921 15.0102 30.0519V10.7755C15.0788 10.0051 15.7171 9.41034 16.4904 9.39624H19.0472V11.1119C19.0827 11.4889 19.4092 11.7709 19.7873 11.7512H29.7114C30.0965 11.7722 30.4332 11.4941 30.4852 11.1119V9.39617H33.0419C33.8152 9.41034 34.4535 10.0051 34.5221 10.7754V30.0519H34.5222Z" fill="#8DB72E" />
                <path d="M22.1759 19.3877C21.9236 19.1217 21.5047 19.1067 21.234 19.3541L19.0809 21.4062L18.1726 20.4642C17.9202 20.1982 17.5013 20.1833 17.2306 20.4306C16.97 20.7036 16.97 21.1332 17.2306 21.4062L18.6099 22.8191C18.7292 22.9528 18.9017 23.0267 19.0808 23.021C19.2583 23.0185 19.4276 22.9459 19.5518 22.8191L22.1758 20.3297C22.4359 20.0911 22.4533 19.6867 22.2146 19.4266C22.2024 19.413 22.1895 19.4001 22.1759 19.3877Z" fill="#8DB72E" />
                <path d="M31.8307 20.8342H24.0932C23.7216 20.8342 23.4204 21.1354 23.4204 21.507C23.4204 21.8786 23.7216 22.1799 24.0932 22.1799H31.8307C32.2023 22.1799 32.5035 21.8786 32.5035 21.507C32.5035 21.1354 32.2023 20.8342 31.8307 20.8342Z" fill="#8DB72E" />
                <path d="M22.1759 14.0051C21.9236 13.7391 21.5047 13.7241 21.234 13.9715L19.0809 16.0235L18.1726 15.0816C17.9202 14.8156 17.5013 14.8006 17.2306 15.0479C16.97 15.321 16.97 15.7505 17.2306 16.0235L18.6099 17.4365C18.7292 17.5702 18.9017 17.6441 19.0808 17.6384C19.2583 17.6358 19.4276 17.5633 19.5518 17.4365L22.1758 14.947C22.4359 14.7084 22.4533 14.304 22.2146 14.044C22.2024 14.0304 22.1895 14.0174 22.1759 14.0051Z" fill="#8DB72E" />
                <path d="M31.8307 15.4516H24.0932C23.7216 15.4516 23.4204 15.7528 23.4204 16.1244C23.4204 16.496 23.7216 16.7973 24.0932 16.7973H31.8307C32.2023 16.7973 32.5035 16.496 32.5035 16.1244C32.5035 15.7528 32.2023 15.4516 31.8307 15.4516Z" fill="#8DB72E" />
                <path d="M22.1759 24.7702C21.9236 24.5042 21.5047 24.4893 21.234 24.7366L19.0809 26.7887L18.1726 25.8467C17.9202 25.5807 17.5013 25.5658 17.2306 25.8131C16.97 26.0861 16.97 26.5157 17.2306 26.7887L18.6099 28.2017C18.7292 28.3353 18.9017 28.4093 19.0808 28.4035C19.2583 28.401 19.4276 28.3284 19.5518 28.2017L22.1758 25.7122C22.4359 25.4736 22.4533 25.0692 22.2146 24.8091C22.2024 24.7956 22.1895 24.7827 22.1759 24.7702Z" fill="#8DB72E" />
                <path d="M31.8307 26.2168H24.0932C23.7216 26.2168 23.4204 26.5181 23.4204 26.8897C23.4204 27.2613 23.7216 27.5625 24.0932 27.5625H31.8307C32.2023 27.5625 32.5035 27.2613 32.5035 26.8897C32.5035 26.5181 32.2023 26.2168 31.8307 26.2168Z" fill="#8DB72E" />
                <circle cx="35.326" cy="7.06522" r="7.06522" fill="#8DB72E" />
            </svg>
        </Fragment>
    );
}

export default Quote;