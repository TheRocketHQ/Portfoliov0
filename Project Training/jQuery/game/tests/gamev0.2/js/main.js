'use strict';
class Board {
    constructor() {
        // Board filed content types
        this.fieldClasses = {
            empty: 'available',
            obstacle: 'unavailable',
            player: 'player',
            weapon: 'weapon'
        };
    }
};