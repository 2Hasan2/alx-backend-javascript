import ClassRoom from './0-classroom';

/**
 * Create a array of {@link ClassRoom}s with size
 * @return {Array<ClassRoom>} - An array of classrooms
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
