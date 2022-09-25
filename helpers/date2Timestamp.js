export default function date2Timestamp(date) {
    return date.toISOString().slice(0, 19).replace('T', ' ');
}
