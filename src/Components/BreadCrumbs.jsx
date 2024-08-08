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

export default BreadCrumbs;