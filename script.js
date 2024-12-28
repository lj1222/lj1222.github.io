// 优化雪花效果，提升性能
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-10px';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.opacity = Math.random() * 0.5 + 0.2;
    snowflake.style.fontSize = (Math.random() * 12 + 8) + 'px';  // 减小雪花大小范围
    snowflake.innerHTML = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];
    snowflake.style.color = 'white';
    snowflake.style.zIndex = 0;
    
    // 移除一些不必要的效果
    snowflake.style.filter = 'blur(0.5px)';  // 减轻模糊效果
    snowflake.style.textShadow = '0 0 2px rgba(255, 255, 255, 0.3)';  // 减轻阴影效果

    document.querySelector('.snow').appendChild(snowflake);

    const duration = Math.random() * 2000 + 4000;  // 调整下落时间
    const rotation = Math.random() * 180;  // 减少旋转角度
    const sway = Math.random() * 20 - 10;  // 减少摆动幅度

    const animation = snowflake.animate([
        { transform: `translate(0, 0) rotate(0deg)` },
        { transform: `translate(${sway}px, ${window.innerHeight}px) rotate(${rotation}deg)` }
    ], {
        duration: duration,
        easing: 'linear'
    });

    animation.onfinish = () => {
        snowflake.remove();
    };
}

// 限制同时存在的雪花数量
let snowflakeCount = 0;
const MAX_SNOWFLAKES = 50;  // 设置最大雪花数量

function manageSnowflakes() {
    if (snowflakeCount < MAX_SNOWFLAKES) {
        createSnowflake();
        snowflakeCount++;
        
        // 当雪花动画结束时减少计数
        setTimeout(() => {
            snowflakeCount--;
        }, 6000);  // 设置稍长于动画时间
    }
}

// 降低雪花生成频率
setInterval(manageSnowflakes, 300);  // 增加间隔时间 