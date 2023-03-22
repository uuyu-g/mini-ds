function Color(props: { value: string; name: string }) {
	return (
		<div className="relative">
			<div className="space-y-1.5 cursor-pointer">
				<div
					className="h-10 w-full rounded dark:ring-1 dark:ring-inset dark:ring-white/10"
					style={{
						backgroundColor: props.value,
					}}
				></div>

				<div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
					<div className="font-medium text-slate-900 2xl:w-full dark:text-white">{props.name}</div>
					<div className="text-slate-500 font-mono lowercase dark:text-slate-400">
						{props.value}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Colors = ({ colors }: { colors: Record<string, Record<string, string> | string> }) => {
	return (
		<div>
			{Object.entries(colors).map(([name, value]) => (
				<div
					key={name + value}
					className="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4"
				>
					<div className="w-16 shrink-0">
						<div className="h-10 flex flex-col justify-center">
							<div className="text-sm font-semibold text-slate-900 dark:text-slate-200">{name}</div>
						</div>
					</div>
					<div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
						{typeof value === 'string'
							? value
							: Object.entries(value).map(([n, v]) => (
									<Color key={n + v} name={n} value={v}></Color>
							  ))}
					</div>
				</div>
			))}
		</div>
	);
};
