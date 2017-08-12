import EventsCollection from '../src/data/events-collection';
import Event from '../src/data/event';
import moment from '../src/moment-range';

describe('Events Collection', () => {
    it('creates events from object', () => {
        const collection = new EventsCollection([
            { range: moment.range('2011-10-01', '2011-10-02') },
        ]);
        expect(collection.events.length).toEqual(1);
        const event = collection.events[0];
        expect(event).toEqual(jasmine.any(Event));
        expect(event.range().isSame(moment.range('2011-10-01', '2011-10-02'))).toBe(true);
    });
});