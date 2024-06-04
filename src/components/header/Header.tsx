import React, { useRef } from 'react';
import './Header.css';
import LogoIcon from "../.micro/LogoIcon";
import { lerp } from "../../utils/math";

const Header: React.FC = () => {
    const spinIntervalRef = useRef<NodeJS.Timer | undefined>(undefined);
    const angleRef = useRef(1);
    const targetAngleRef = useRef(360);

    const handleMouseEnter = () => {
        targetAngleRef.current = 360;

        if (spinIntervalRef.current) {
            clearInterval(spinIntervalRef.current);
        }

        spinIntervalRef.current = setInterval(() => {
            const t = Math.min(0.1, angleRef.current / 1800);

            angleRef.current = lerp(angleRef.current, targetAngleRef.current, t);
            applyStyles(angleRef.current);

            if (Math.abs(targetAngleRef.current - angleRef.current) < 0.5) {
                clearInterval(spinIntervalRef.current);
            }
        }, 20);
    };

    const handleMouseLeave = () => {
        targetAngleRef.current = angleRef.current;

        if (spinIntervalRef.current) {
            clearInterval(spinIntervalRef.current);
        }

        spinIntervalRef.current = setInterval(() => {
            const t = Math.min(0.1, (angleRef.current || 10) / 100);

            angleRef.current = lerp(angleRef.current, 0, t);
            applyStyles(angleRef.current);

            if (Math.abs(angleRef.current) < 0.5) {
                clearInterval(spinIntervalRef.current);
            }
        }, 20);
    };

    const applyStyles = (angle: number) => {
        const rotateElements = document.querySelectorAll('.rotate');
        rotateElements.forEach((element) => {
            (element as HTMLElement).style.transform = `rotate(${angle}deg)`;
        });
    };

    return (
        <header className="header">
            <h1>
                <a className="logo" href="/" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <LogoIcon/>
                    <span className="logo-name">findmymovie!</span>
                </a>
            </h1>
        </header>
    );
};

export default Header;
