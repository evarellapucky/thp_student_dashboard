import PropTypes from 'prop-types';
function CollapseBar({ title, content, borderColor }) {
  return (
    <details className={`collapse collapse-arrow bg-base-200 mb-4 border ${borderColor}`}>
      <summary className="collapse-title text-xl font-medium bg-gray-200">
        {title}
        </summary>
      <div className="collapse-content bg-white">
        <div>{content}</div>
      </div>
    </details>
  )
}

CollapseBar.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  borderColor: PropTypes.string
};

export default CollapseBar
