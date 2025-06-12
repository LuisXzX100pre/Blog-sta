export default function Paragraph({ text }) {
  return (
    <>
      <div>
        <p className="text-justify text-gry-100 m-m text-fs-14">
          {text}
        </p>
      </div>
    </>
  );
}
