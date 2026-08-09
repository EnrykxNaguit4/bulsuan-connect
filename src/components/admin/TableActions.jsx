import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

function ActionButton({
  title,
  color,
  hover,
  onClick,
  children,
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`
        w-9
        h-9
        flex
        items-center
        justify-center
        rounded-lg
        ${color}
        ${hover}
        transition-all
        duration-200
        hover:scale-105
        active:scale-95
      `}
    >
      {children}
    </button>
  );
}

function TableActions({
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div className="flex justify-center gap-2">

      {onView && (
        <ActionButton
          title="View"
          color="text-gray-600"
          hover="hover:bg-gray-100"
          onClick={onView}
        >
          <EyeIcon className="w-5 h-5" />
        </ActionButton>
      )}

      {onEdit && (
        <ActionButton
          title="Edit"
          color="text-blue-600"
          hover="hover:bg-blue-50"
          onClick={onEdit}
        >
          <PencilSquareIcon className="w-5 h-5" />
        </ActionButton>
      )}

      {onDelete && (
        <ActionButton
          title="Delete"
          color="text-red-600"
          hover="hover:bg-red-50"
          onClick={onDelete}
        >
          <TrashIcon className="w-5 h-5" />
        </ActionButton>
      )}

    </div>
  );
}

export default TableActions;