export const LIVE_PROBABILITY = 0.5;
export const DEAD_PROBABILITY = 1 - LIVE_PROBABILITY;

export const LIVE_CELLS_REQUIRED_TO_CREATE_NEW_LIFE = 2;
export const DEAD_CELLS_REQUIRED_TO_KILL_LIFE = 3;


export const TextMap = {
    live: 'Живая',
    dead: 'Мёртвая',
    life: 'Жизнь',

    liveEmoji: '💥',
    deadEmoji: '💀',
    lifeEmoji: '🐣',

    liveCellPrefix: 'и шевелится!',
    deadCellPrefix: 'или прикидывается',
    lifeCellPrefix: 'Ку-ку!',

    cellFilling: 'Клеточное наполнение',
    create: 'Сотворить',
}