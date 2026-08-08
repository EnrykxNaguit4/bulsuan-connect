function SettingSection({
  icon: Icon,
  title,
  description,
  children,
}) {
  return (
    <section className="bg-white border rounded-2xl shadow-sm p-8">

      <div className="flex items-start gap-4">

        <div className="bg-purple-100 text-purple-700 p-3 rounded-xl">

          {Icon && (
            <Icon className="w-6 h-6" />
          )}

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          {description && (
            <p className="text-gray-500 mt-2">
              {description}
            </p>
          )}

        </div>

      </div>

      <div className="mt-8">
        {children}
      </div>

    </section>
  );
}

export default SettingSection;