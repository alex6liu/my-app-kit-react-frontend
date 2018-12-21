import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import './index.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';

const routes = [ ];

const Breadcrumbs = ({ breadcrumbs }) => {
    return (
        <div className="breadcrumbs-contianer">
            {breadcrumbs.map((breadcrumb, index) => (
                <span key={breadcrumb.key}>
                <NavLink to={breadcrumb.props.match.url}>
                    {breadcrumb}
                </NavLink>
                {(index < breadcrumbs.length - 1) && <Icon type="right" />}
                </span>
            ))}
        </div>
    );
}

export default withBreadcrumbs(routes)(Breadcrumbs);
// export default withBreadcrumbs(routes, { excludePaths: ['/', '/no-breadcrumb/for-this-route'] })(Breadcrumbs);