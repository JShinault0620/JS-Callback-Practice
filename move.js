function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    const moveWithArrowKeys = (left, bottom, callback) => {
        let direction = null
        let x = left
        let y = bottom

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter(){
            switch(direction){
                case ('west'):
                    x -= 1;
                    break;
                case ('north'):
                    y += 1;
                    break;
                case ('east'):
                    x += 1;
                    break;
                case ('south'):
                    y -= 1;
                    break;
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
            console.log(e.key)
        
            switch(e.key){
                case ('ArrowLeft'):
                    direction = 'west';
                    break;
                case ('ArrowUp'):
                    direction = 'north';
                    break;
                case ('ArrowRight'):
                    direction = 'east';
                    break;
                case ('ArrowDown'):

                    direction = 'south';
                    break;
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }
    
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}