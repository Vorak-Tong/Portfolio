const Button = ({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    ariaLabel,
    disabled = false,
    ...props
}) => {
    const baseStyles = 'px-6 py-3 rounded-2xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900';

    const variants = {
        primary: 'bg-sky-500 text-white hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/50 hover:scale-105',
        outline: 'border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white hover:scale-105',
        ghost: 'text-slate-300 hover:text-sky-400 hover:bg-slate-800'
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';
    const combinedClassName = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`;

    const handleClick = (e) => {
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbarHeight = 64;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        if (onClick) {
            onClick(e);
        }
    };

    if (href) {
        return (
            <a
                href={href}
                onClick={handleClick}
                className={combinedClassName}
                aria-label={ariaLabel}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={combinedClassName}
            aria-label={ariaLabel}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
