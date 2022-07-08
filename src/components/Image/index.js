import { forwardRef } from 'react';
import { useState } from 'react';

const Image = forwardRef(({ alt, src, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const HandleError = () => {
        setFallback('https://img.vn/uploads/version/img24-png-20190726133727cbvncjKzsQ.png');
    };
    return <img ref={ref} alt={alt} src={fallback || src} {...props} onError={() => HandleError()} />;
});

export default Image;
