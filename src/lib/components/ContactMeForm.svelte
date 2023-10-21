<div id="wrapper" class="m-1/10 p-1/100">
	<h1 id="hitmeup" class="place-self-center">
		<a class="text-primary-green" href="#hitmeup">HIT ME UP</a> 👇
	</h1>
	<p>
		I'm open to new opportunities, whether it's an open source project or a free position in a team. Write to me and I'll reply,
		usually within 48 hours. Looking forward to hearing from you 😉
	</p>
	<div>
		<form autocomplete="off" action="https://api.staticforms.xyz/submit" method="post" class="my-4">
			<input type="hidden" name="accessKey" value="cb05fe42-31b2-4d6c-8d07-4e45b326a110" />
			<input type="text" name="honeypot" style="display: none;" />

			<div class="grid grid-cols-3 gap-3 md:grid-cols-6">
				<!-- Grid Container -->

				<div class="flex items-center">
					<!-- Grid cell -->
					<label class="mr-2 whitespace-nowrap font-bold" for="name"
						>Name</label
					>
				</div>
				<div class="col-span-6 flex items-center">
					<!-- Grid cell -->
					<input
						class="h-1 text-[1.25vw] md:h-auto lg:text-lg w-full appearance-none rounded border-2 py-2 px-2 md:px-4
						leading-tight text-black focus:border-primary-green focus:bg-white focus:outline-none"
						name="name"
						type="text"
						placeholder="John Doe"
						required
					/>
				</div>

				<div class="flex items-center">
					<!-- Grid cell -->
					<label class="mr-2 whitespace-nowrap font-bold" for="email"
						>Email</label
					>
				</div>
				<div class="col-span-6 flex items-center">
					<!-- Grid cell -->
					<input
						class="h-1 text-[1.25vw] md:h-auto lg:text-lg w-full appearance-none rounded border-2 py-2 px-2 md:px-4
						leading-tight text-black focus:border-primary-green focus:bg-white focus:outline-none"
						name="email"
						title="A valid email is required!"
						type="email"
						placeholder="john.doe@example.com"
						required
					/>
				</div>

				<div class="flex items-center">
					<label class="mr-2 whitespace-nowrap font-bold" for="message"
						>Message</label
					>
				</div>

				<div class="col-span-6 flex items-center">
					<textarea
						class="text-[1.25vw] lg:text-lg w-full appearance-none rounded border-2 py-2 px-2 md:px-4
						leading-tight text-black focus:border-primary-green focus:bg-white focus:outline-none"
						name="message"
						placeholder="Mary had a little lamb, its fleece was white as snow 🐑"
						required
					/>
				</div>

				<div class="col-span-6 my-1 md:my-4 flex items-center lg:my-10">
					<input
						type="submit"
						value="Submit"
						class="h-1 text-[1.5vw] w-1/3 md:h-auto md:w-1/6 md:text-base lg:text-lg mx-auto appearance-none rounded-xl border-2 bg-primary-green 
						py-2 px-4 leading-tight focus:outline-none"
					/>
				</div>
				<input type="hidden" name="redirectTo" value="https://longph.com" />
			</div>
		</form>
	</div>
</div>

<style>
	p {
		font-size: 1.25vw;
	}

	h1 {
		font-size: 3vw;
		margin-top: 4%;
		margin-bottom: 4%;
	}

	input[type='text'],
	textarea {
		width: 100%;
	}

	label {
		font-size: 1.5vw;
	}

	label:after {
		content: '*';
		color: red;
	}
</style>
