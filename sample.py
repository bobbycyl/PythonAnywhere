# Please use the latest version of chromium browsers for the best experience.
# To mount local file system, run 'mountNativeFileSystem();' in the console.


# Here is a sample code for you to start with.
async def sample():
    try:
        name = input()
    except EOFError:
        name = "user"
    element_pyname = Element("pyname").element
    previous = element_pyname.innerHTML
    element_pyname.innerHTML = f"<h1>Hello, {name}</h1>"
    await asyncio.sleep(2)
    element_pyname.innerHTML = previous

    df_example = pd.DataFrame(
        {
            "a": [1, 2, 3],
            "b": [4, 5, 6],
            "c": [7, 8, 9],
        }
    )
    df_example.to_csv("example.csv", index=False)
    save("example.csv")


asyncio.ensure_future(sample())
