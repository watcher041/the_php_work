import React from 'react';
import Icon from '../../images/logo.svg'

export default function ApplicationLogo({ className }) {
    return (
        <img src={Icon} className={className} alt="Icon"  />
    );
}
