import PropTypes from 'prop-types';
const BreadCrumbs = ({ activeTab }) => {
    return (
        <div className="breadcrumbs text-sm">
            <ul>

                <li>
                    <a className="active">
                        {activeTab}
                    </a>
                </li>

            </ul>
        </div>
    );
};

BreadCrumbs.propTypes = {
    activeTab: PropTypes.string
};

export default BreadCrumbs;