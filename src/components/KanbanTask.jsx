function KanbanTask({ list, setRequestUpdate, id, item }) {
  function handleDragStart(e) {
    e.dataTransfer.setData("text", JSON.stringify(item));
  }

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      className="hover:cursor-grab active:cursor-grabbing bg-stone-100 rounded-xl break-words overflow-hidden relative task"
    >
      {item.cover && (
        <div className="max-h-36 w-full overflow-hidden">
          <img src="/cover-1.jpg" />
        </div>
      )}
      <div className=" px-3 py-2.5">
        {(item.label || item.color) && (
          <span
            style={{ backgroundColor: item.color }}
            className="px-1.5 py-1 text-xs font-semibold uppercase min-w-12 rounded-full inline-block"
          >
            {item.label || ""}
          </span>
        )}
        {}
        <p className="">{item.desc}</p>
        <button
          onClick={() => setRequestUpdate({ listID: list.id, projectID: id, task: item })}
          className="absolute top-[10px] right-[10px] hidden"
        >
          ✏
        </button>
      </div>
    </div>
  );
}

export default KanbanTask;
