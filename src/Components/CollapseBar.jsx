import PropTypes from 'prop-types';
import '../index.css'

function CollapseBar({ title, content, borderColor }) {
  return (
    <details className={`collapse collapse-arrow mb-4 bg-gray-light hhover:bg-blue-gradient border ${borderColor} max-w-[95%] xs:max-w-[90%] sm:min-w-[90%] md:min-w-[90%] lg:min-w-[90%] xl:min-w-[90%] 2xl:min-w-[85%] mx-auto`}>
      <summary className=" collapse-title text-lg md:text-xl font-medium p-4">
        {title}
      </summary>
      <div className="collapse-content bg-white p-4 ">
        <div className="text-sm md:text-base">
          {content}
        </div>
      </div>
    </details>
  );
}

CollapseBar.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default CollapseBar;
