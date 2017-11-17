using System;
using System.Web;
using Microsoft.AspNet.SignalR;
namespace PlayerLobby
{
    public class PlayerHub : Hub
    {
        public void Send(string name)
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.broadcastMessage(name);
        }
    }
}