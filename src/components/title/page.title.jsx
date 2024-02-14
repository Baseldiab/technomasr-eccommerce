/* eslint-disable react/prop-types */
export default function PageTitle(props) {
  return (
    <h1 className="font-pageTitle md:text-3xl sm:text-2xl text-xl py-4 uppercase text-center">
      {props.title}
    </h1>
  );
}
