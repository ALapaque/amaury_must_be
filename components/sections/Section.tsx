interface Props {
  children: React.ReactNode;
}

const Section = (props: Props) => {
  return (
    <section>{ props.children }</section>
  );
};

export default Section;
