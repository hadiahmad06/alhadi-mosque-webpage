const SectionNav = ({ className, id, text }) => {
  
    return (
      <div>
        <a
          className={className}
          onClick={() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            display: "inline-block",
          }}
        >
          {text}
        </a>
      </div>
    );
  };
  
  export default SectionNav;