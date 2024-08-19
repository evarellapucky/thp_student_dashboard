import PropTypes from 'prop-types';

function CollapseBar({ title, content, borderColor }) {
  return (
    <details className={`collapse collapse-arrow bg-base-200 mb-4 border ${borderColor} w-full max-w-lg md:min-w-full lg:min-w-full xl:min-w-full 2xl:min-w-full mx-auto`}>
      <summary className="collapse-title text-lg md:text-xl font-medium bg-gray-200 p-4">
        {title}
      </summary>
      <div className="collapse-content bg-white p-4">
        <div className="text-sm md:text-base">
          {content}
        </div>
      </div>
    </details>
  );
}

CollapseBar.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  borderColor: PropTypes.string,
};

export default CollapseBar;
