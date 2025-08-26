import { Await, useRouteLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import EventForm from '../components/EventForm';

function EditEventPage() {
  const { event } = useRouteLoaderData('event-detail');

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventForm method="patch" event={loadedEvent} />}
      </Await>
    </Suspense>
  );
}

export default EditEventPage;
