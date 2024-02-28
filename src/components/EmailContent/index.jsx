import EmailCloseButton from "./EmailCloseButton";
import EmailData from "./EmailData";
import EmailTitle from "./EmailTitle";

export default function EmailContent({ email, setOpenEmail }) {
  const sendDate = new Date(email.createdAt);
  const openemailDate = `${sendDate.toLocaleDateString()} ${sendDate.toLocaleTimeString()}`;

  return (
    <div
      className="
      p-2 md:p-4 absolute lg:relative h-full w-full
      bg-background-50 dark:bg-background-700
      text-background-900 dark:text-background-50
      grow[2] basis-96
      "
    >
      <EmailCloseButton onClick={() => setOpenEmail(null)} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailData>{`<${email.from}>`}</EmailData>
      <EmailData>Para: {`<john.do@email.com>`}</EmailData>
      <EmailData>Em: {openemailDate}</EmailData>
      <hr className="my-4" />
      {email.body}
    </div>
  )
}