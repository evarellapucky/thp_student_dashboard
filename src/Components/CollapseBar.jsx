import PropTypes from 'prop-types';
import '../index.css'

function CollapseBar({ title, content, borderColor }) {
  return (
    <details className={`collapse collapse-arrow mb-4 bg-slate-100 hover:bg-blue-500 border ${borderColor} w-full max-w-lg  sm:min-w-full md:min-w-lg lg:min-w-1xl xl:min-w-lg 2xl:min-w-full mx-auto`}>
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
